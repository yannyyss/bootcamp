import React, { useEffect, useState } from 'react'
import { Card, Button, Modal, Input, Progress } from 'antd'
import { connect } from 'react-redux'
import { setEditingBootcampAction } from '../../redux/adminDuck'
import { getWeekAdminAction, saveLearningAction, deleteLearningAction, updateCurrentWeekAction } from '../../redux/bootcampDuck'
import toastr from 'toastr'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import firebase from '../../firebase'


const { confirm } = Modal;

function WeekEdit({ updateCurrentWeekAction, error, deleteLearningAction, saveLearningAction, week, getWeekAdminAction, match }) {
    let [editing, setEditing] = useState(false)
    let [learning, setLearning] = useState({})
    let [video, setVideo] = useState(null)
    let [progress, setProgress] = useState(0)

    useEffect(() => {
        if (match.params.id) getWeekAdminAction(match.params.id)
    }, [])
    useEffect(() => {
        if (error) toastr.error(error)
    }, [error])
    // login?

    function onChange({ target: { name, value } }) {
        setLearning({ ...learning, [name]: value })
    }
    function saveLearning() {
        setEditing(false)
    }

    function saveLearning() {
        if (!editing) {
            saveLearningAction({ week: week._id, title: "blissi" })
        } else {
            saveLearningAction(learning)
        }
        setEditing(false)
    }

    function onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        // change order
        const items = reorder(
            week.learnings,
            result.source.index,
            result.destination.index
        );
        let w = { ...week }
        console.log(items)
        w.itemsOrder = items.map((item, i) => item._id)
        updateCurrentWeekAction(w)
        // set order in learning


    }

    function reorder(list, startIndex, endIndex) {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };


    function renderLearning(item, i) {
        if (!item) return null
        return (
            <Draggable key={item._id} draggableId={item._id} index={i}>
                {(provided, snapshot) => (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <Card
                            style={styles.card}
                            key={i}
                            title={item.title}
                            extra={<a onClick={() => {
                                setEditing(true)
                                setLearning(item)
                            }} href="#">Ediar</a>}
                        >

                            <div>
                                <strong>{item.description}</strong>
                            </div>

                        </Card ></div>)}
            </Draggable>
        )
    }

    function showDeleteConfirm() {
        confirm({
            title: '¿Estas segur@ de borrar esta learning?',
            content: 'No podras recuperar el recurso',
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                if (learning.link) {
                    firebase.storage().refFromURL(learning.link).delete()
                }
                deleteLearningAction(learning)
                setEditing(false)

            },
            onCancel() {

            },
        });
    }

    function uploadVideo({ target: { files } }) {
        let reader = new FileReader()
        let task = firebase.storage().ref('videoTest').child(`${learning._id}`).put(files[0])
        task.then(snap => {
            console.log(snap)
            return snap.ref.getDownloadURL()
        })
            .then(url => {
                setVideo(url)
                setLearning({ ...learning, link: url })
            })
        task.on('state_changed', function (snapshot) {
            var p = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProgress(p)
        })


    }
    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>

                <div >
                    <h1>Week {week.title}</h1>
                    <p>{week.description}</p>
                    <Button onClick={saveLearning} type="dashed">Agregar Learning</Button>
                    <br />
                    <br />
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={snapshot.isDraggingOver ? { background: "grey", padding: 40 } : null}
                            >

                                {week.learnings && week.learnings.map(renderLearning)}
                                {(!week.learnings || week.learnings.length < 1) && <h3>No hay learnings asignadas a esta semana</h3>}
                            </div>)}
                    </Droppable>
                    <Modal
                        onOk={saveLearning}
                        title={`Editar ${learning.title}`}
                        visible={editing}
                        onCancel={() => {
                            setEditing(false)
                            setLearning({})
                            setVideo(null)
                        }}
                    >
                        <Input
                            name="title"
                            placeholder="Título"
                            value={learning.title}
                            onChange={onChange}
                        />
                        <Input
                            onChange={onChange}
                            name="description"
                            placeholder="descripción"
                            value={learning.description}
                        />

                        <Input
                            onChange={uploadVideo}
                            type="file"
                        />
                        <br />
                        <br />
                        {!video ? <Progress type="circle" percent={progress} width={100} /> :
                            <video controls width="300" src={video}></video>}
                        {learning.link ?
                            <video controls width="300" src={learning.link}></video> : null}

                        <Button onClick={showDeleteConfirm} type="danger">Borrar</Button>
                    </Modal>
                </div >
            </DragDropContext>
        </div>
    )
}

const styles = {
    card: {
        marginBottom: 20
    }

};

function mapState({ bootcamps: { object, currentWeek, error }, admin: { editingBootcamp } }) {
    let w = { ...currentWeek }
    if (w.itemsOrder && w.itemsOrder.length > 0 && w.learnings && w.learnings.length > 0) {
        w.learnings = w.itemsOrder.map(i => w.learnings.find(l => l._id === i))
    }
    return {
        bootcamp: object[editingBootcamp] || { title: "No haz seleccionado bootcamp" },
        week: w,
        error
    }
}

export default connect(mapState, { deleteLearningAction, getWeekAdminAction, saveLearningAction, updateCurrentWeekAction })(WeekEdit)
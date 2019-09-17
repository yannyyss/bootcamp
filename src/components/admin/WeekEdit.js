import React, { useEffect, useState } from 'react'
import { Card, Button, Modal, Input } from 'antd'
import { connect } from 'react-redux'
import { setEditingBootcampAction } from '../../redux/adminDuck'
import { getWeekAdminAction, saveLearningAction, deleteLearningAction } from '../../redux/bootcampDuck'
import toastr from 'toastr'

const { confirm } = Modal;

function WeekEdit({ error, deleteLearningAction, saveLearningAction, week, getWeekAdminAction, match }) {
    let [editing, setEditing] = useState(false)
    let [learning, setLearning] = useState({})
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

    function renderLearning(item, i) {
        return (
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

            </Card >
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
                deleteLearningAction(learning)
                setEditing(false)
            },
            onCancel() {

            },
        });
    }

    return (
        <div >
            <h1>Week {week.title}</h1>
            <p>{week.description}</p>
            <Button onClick={saveLearning} type="dashed">Agregar Learning</Button>
            <br />
            <br />
            <div>
                {week.learnings && week.learnings.map(renderLearning)}
                {(!week.learnings || week.learnings.length < 1) && <h3>No hay learnings asignadas a esta semana</h3>}
            </div>
            <Modal
                onOk={saveLearning}
                title={`Editar ${learning.title}`}
                visible={editing}
                onCancel={() => {
                    setEditing(false)
                    setLearning({})
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
                <Button onClick={showDeleteConfirm} type="danger">Borrar</Button>
            </Modal>
        </div >
    )
}

const styles = {
    card: {
        marginBottom: 20
    }

};

function mapState({ bootcamps: { object, currentWeek, error }, admin: { editingBootcamp } }) {
    return {
        bootcamp: object[editingBootcamp] || { title: "No haz seleccionado bootcamp" },
        week: currentWeek,
        error
    }
}

export default connect(mapState, { deleteLearningAction, getWeekAdminAction, saveLearningAction })(WeekEdit)
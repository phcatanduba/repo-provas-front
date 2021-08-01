import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Upload({ options }) {
    const { teachers, subjects } = options;
    const [teachersFiltered, setTeachersFiltered] = useState([]);
    const [teacherId, setTeacherId] = useState();
    const [categoryId, setCategoryId] = useState();
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function upload(e, name, link, teachersId, categoriesId) {
        e.preventDefault();
        const body = {
            name,
            link,
            teachersId,
            categoriesId,
        };
        console.log(body);
        const promise = axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/exams`,
            body
        );
        promise.then(() => {
            alert('PROVA ENVIADA');
        });
        promise.catch((e) => {
            console.log(e);
            alert('ERRO');
        });
    }

    useEffect(() => {
        if (teachers[0] && subjects[0]) {
            setTeacherId(teachers[0].id);
            setCategoryId(1);
            setTimeout(() => {
                setTeachersFiltered(
                    teachers.filter((t) => {
                        return t.subjectsId === subjects[0].id;
                    })
                );
            }, 50);
        }
    }, [subjects, teachers]);

    return (
        <Form
            onSubmit={(e) => {
                upload(e, name, link, teacherId, categoryId);
            }}
        >
            <input
                placeholder="Nome/Ano da Prova"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            ></input>
            <input
                placeholder="Link da Prova"
                type="url"
                value={link}
                onChange={(e) => {
                    setLink(e.target.value);
                }}
            ></input>
            <select
                onChange={(e) => {
                    const result = teachers.filter((t) => {
                        return t.subjectsId === +e.target.value;
                    });
                    setTeachersFiltered(result);
                }}
            >
                {subjects.map((s) => {
                    return (
                        <option value={s.id} key={s.id}>
                            {s.name}
                        </option>
                    );
                })}
            </select>
            <select
                value={teacherId}
                onChange={(e) => {
                    setTeacherId(+e.target.value);
                }}
            >
                {teachersFiltered.map((t) => {
                    return (
                        <option value={t.id} key={t.id}>
                            {t.name}
                        </option>
                    );
                })}
            </select>
            <select
                value={categoryId}
                onChange={(e) => {
                    setCategoryId(+e.target.value);
                }}
            >
                <option value={1}>P1</option>
                <option value={2}>P2</option>
                <option value={3}>P3</option>
                <option value={4}>2CH</option>
                <option value={5}>Outras</option>
            </select>
            <button type="submit">Enviar Prova</button>
        </Form>
    );
}

const Form = styled.form`
    input,
    button,
    select {
        display: block;
        height: 30px;
        font-size: 20px;
        border-radius: 5px;
    }
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

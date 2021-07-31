import { useState } from 'react';
import styled from 'styled-components';

export default function TeachersView({ exams, id }) {
    const [category, setCategory] = useState(false);
    const categories = ['P1', 'P2', 'P3', '2CH', 'Outras'];
    const newExams = exams.filter((e) => {
        return e.teachersId === +id;
    });

    return (
        <>
            <Exams>
                <label>Selecione: </label>
                {categories.map((c, i) => {
                    return (
                        <li
                            key={i}
                            onClick={() => {
                                setCategory(i + 1);
                            }}
                        >
                            {c}
                        </li>
                    );
                })}
            </Exams>
            <Exams>
                {newExams.map((exam) => {
                    if (exam.categoriesId === category) {
                        return (
                            <li key={exam.id}>
                                {exam.name}: <a href={exam.link}>link</a>
                            </li>
                        );
                    }
                })}
            </Exams>
        </>
    );
}

const Exams = styled.ul`
    width: 100%;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
        cursor: pointer;
        margin-left: 15px;
        font-size: 24px;
    }

    label {
        font-size: 24px;
    }
`;

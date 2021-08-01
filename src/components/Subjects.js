import styled from 'styled-components';

export default function Subjects({ subjects, setBool, exams, setSubjectId }) {
    return (
        <SubjectsBox>
            <label htmlFor="subjects">Disciplinas:</label>
            <select
                id="subjects"
                onChange={(e) => {
                    setBool(false);
                    setSubjectId(e.target.value);
                }}
            >
                <option>Selecione uma opção abaixo</option>
                {subjects.map((s) => {
                    return (
                        <option key={s.id} value={s.id}>
                            {s.name} (
                            {
                                exams.filter((e) => {
                                    return e.teachers.subjectsId === s.id;
                                }).length
                            }{' '}
                            provas) - {s.quarter}* Período
                        </option>
                    );
                })}
            </select>
        </SubjectsBox>
    );
}

const SubjectsBox = styled.div`
    label {
        font-size: 24px;
        margin-right: 10px;
    }
    select {
        height: 30px;
        font-size: 20px;
        border-radius: 5px;
    }
`;

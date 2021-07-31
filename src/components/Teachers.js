import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Teachers({ teachers }) {
    return (
        <ul>
            {teachers.map((s) => {
                return <li key={s.id}>{s.name}</li>;
            })}
        </ul>
    );
}

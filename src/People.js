import React from 'react';
import loading from './Loading';
import Collapse from './Collapse';

function People(props) {
    let people = props.people.map((e, i) => (
        //Collapse is a Render Props example
        <Collapse key={i} name={e.name}>
            {(styles) => (
                <div style={styles}>
                    <p>{e.hair_color}</p>
                    <p>{e.eye_color}</p>
                    <p>{e.gender}</p>
                    <p>{e.birth_year}</p>
                </div>
            )}
        </Collapse>
    ))

    return (
        <div>
            {people}
        </div>
    )
}

export default loading(People);
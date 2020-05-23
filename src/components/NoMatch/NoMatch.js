import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <section>
            <article>
                <h1>Not Found!</h1>
                <h4>Looking for best services <Link to="/">Click Here</Link></h4>
            </article>
        </section>
    )
};

export default React.memo(NoMatch)
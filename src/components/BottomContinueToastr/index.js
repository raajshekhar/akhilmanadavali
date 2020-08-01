import React from 'react';
import './index.scss';

const arrowRight = <span class="material-icons ml-5">arrow_forward</span>;

const BottomContinueToastr = ({value = 0}) => {
    return (
        <section className="continue-toast">
            Continue {value} {arrowRight}
        </section>
    )
};

export default React.memo(BottomContinueToastr);
import React from 'react';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================


const ListView = ({ children, data, className }) => {
    if (!data) {
        return (
            <ul className={className}></ul>
        )
    }

    return (
        <ul className={className}>
            {data.map(hash =>
                (<li key={hash.id}>{React.cloneElement(children, {data: hash})}</li>)
            )}
        </ul>
    )
};

export default ListView;

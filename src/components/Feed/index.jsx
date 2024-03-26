import React from 'react';

const Feed = ({render, items}) => {

    return (
        <div className="borderWrapper">
            <div>
                {items.map((item) => (
                    render(item)
                ))}
            </div>
        </div>
    );
};

export default Feed;

import React from 'react';

const Category = ({params}:{
    params:{
        name: string;
    }
}) => {
    console.log(params);
    console.log(params);
    
    return (
        <div>
           <h1>{params.categoryName}</h1>
        </div>
    );
};

export default Category;
export default Category;
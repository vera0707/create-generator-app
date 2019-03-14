import { FETCH_LIST,LIST_ADD }  from './type';

export const fetchList = () => dispath=>{
    fetch("http://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data =>
            dispath({
                type: FETCH_LIST,
                payload: data,
            })
        );
};

export const createProps = data => dispath=>{
    dispath({
        type: LIST_ADD,
        payload: data,
    });
};
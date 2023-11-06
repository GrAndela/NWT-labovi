import * as React from 'react';

export interface HomeProps {
    
}
 
export interface HomeState {
    
}

class Comment extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

    }
    render() { 
        return ( <>
            <h1>Komentari</h1>
        </>  );
    }
}
 
export default Comment;
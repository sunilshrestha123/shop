import React from 'react';

import { GetCategory } from '../../services/api'
import './category.style.scss'
export default class Catgory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            category: []
        }
    }
    async componentDidMount() {
        const result = await GetCategory();
        console.log('my result', result)
        this.setState({ category: result.category, loading: false })
    }


    render() {
        // console.log('may data in stete', this.state.category);
        const data = this.state.category.map(items => <li className="list-style" key={items.id}>{items.category_name}</li>)
        // if (this.state.loading) {
        //     return <div>loading.....</div>
        // }
        // else if (!this.state.category) {
        //     return <div> fuck i am not getting data</div>
        // }

        return (
            <div>{data}
            </div>
        )
    }
}
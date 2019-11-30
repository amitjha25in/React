import React, { Component } from 'react'

export default class List extends Component {
    state = {
        initialItems: [
            "Apples",
            "Broccoli",
            "Chicken",
            "Bacon",
            "Eggs",
            "Salmon",
            "Granola",
            "Bananas",
            "Beer",
            "Wine",
            "Yogurt"
        ],
        items: []
    }

    updatedList = () => {
        this.state.initialItems.filter((list_item) = () => {
            return list_item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList });
    };
    componentWillMount() {
        this.setState({ items: this.state.initialItems })
    };
    render() {
        const listItems = this.state.items.map((listss) =>
            <li key={listss}>{listss}</li>
        );
        return (
            <div className="row">
                <div className="filter-list">
                    <input type="text" placeholder="Search" onChange={this.updatedList} />
                </div>
                <ul>
                    {
                        { listItems }
                    }
                </ul>
            </div>
        )
    }
}




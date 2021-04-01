import React from "react";

export default class FetchDepartment extends React.Component{
    
    state = {
        loading: true,
        department: null
    }
    
    async componentDidMount() {
        const url = "https://schedge.a1liu.com/subjects";
        const response = await fetch (url);
        const departmentList = await response.json();
        this.setState({department: departmentList[0], loading: false})
        console.log(departmentList.NT[0])
    }

    render() {
        return <div>
            {this.state.loading || !this.state.department ? (
            <div>loading...</div>
            ) : (
            <div>this.state.department.name</div> 
            )}
        </div> 
    }
}
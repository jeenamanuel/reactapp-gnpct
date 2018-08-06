import React from "react";
import { connect } from "react-redux";
import { userProfile, clearDetails } from "./Actions";
import Loader from './Loader';

const employee = {
    list: [
        {
            department: 'HR',
            employee_ids: [1, 2, 3, 4, 5]
        }, {
            department: 'Engineering',
            employee_ids: [6, 7, 8, 9, 10]
        }
    ]
}
class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            selectedOptionValue: '',
        }
    }

    componentDidMount() {
    }
    getDetails() {
        const { selectedOptionValue } = this.state;
        this
            .props
            .dispatch(userProfile(selectedOptionValue));

    }
    clearDetais() {
        const { selectedOptionValue } = this.state;
        this
            .props
            .dispatch(clearDetails());

    }
    changeHandle(event) {
        this.setState({ selectedOption: event.target.value });
    }
    changeHandleVal(event) {
        this.setState({ selectedOptionValue: event.target.value });
    }
    render() {
        const { data } = this.props.userData;
        const { selectedOption } = this.state
        let emp = employee
            .list
            .filter(function (v) {
                return v.department === selectedOption;
            })
        let name = data ? `${data.first_name} ${data.last_name}` : '';
        return (
            <div className="user-list">
                <div className="user">
                    <label> Departments:</label>
                    <select
                        className="form-control"
                        onChange={this
                            .changeHandle
                            .bind(this)}>
                        <option value="">
                            --Select--
                    </option>
                        {employee
                            .list
                            .map(data => (
                                <option key={data.department} value={data.department}>
                                    {data.department}
                                </option>
                            ))}
                    </select>
                </div>
                <div className="user">
                    <label> Employee Id :</label>

                    <select
                        className="form-control"
                        onChange={this
                            .changeHandleVal
                            .bind(this)}>
                        <option value="">
                            --Select--
                    </option>
                        {emp.map(data => (data.employee_ids.map(value => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))))}
                    </select>
                </div>
                <div className="btn-list">
                    <input
                        type="button"
                        value="Get Details"
                        className="btn"
                        onClick={this
                            .getDetails
                            .bind(this)} />
                    <input
                        type="button"
                        value="Clear Details"
                        className="btn"
                        onClick={this
                            .clearDetais
                            .bind(this)} />

                </div>
                <Loader loader={{ load: this.props.loader }} />
                {data && data.id !== undefined
                    ? <div className="user-data">
                        <img src={data.avatar} />
                        <div className="user">ID: {data.id}
                        </div>
                        <div className="user">
                            Name :{name}
                        </div>
                    </div>
                    : null}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return { userData: state.userState.userData, loader: state.userState.loader }
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

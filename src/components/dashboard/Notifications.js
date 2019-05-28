import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
    const {notifications} = props;
    return (
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <div className="card-title">
                        <h3>Notifications</h3>
                    </div>
                        <ul className="notifications">
                            { notifications && notifications.map(item => {
                                return (
                                    <li key={item.id}>
                                        <span className="text-info">{item.user} </span>
                                        <span>{item.content}</span>
                                        <div className="note-date text-info">
                                            {moment(item.time.toDate()).fromNow()}
                                        </div>
                                    </li>
                                )
                            }) }                            
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;


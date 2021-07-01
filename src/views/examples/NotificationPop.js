import { Button, notification, Space } from 'antd';

export const openNotificationWithIcon = (type, heading, message) => {
    notification[type]({
        message: heading,
        description: message,
    });


};

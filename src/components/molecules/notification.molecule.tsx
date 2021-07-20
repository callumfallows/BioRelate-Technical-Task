import { UnorderedList, ListItem, Flex, Badge, Text,Box } from '@chakra-ui/react';
import * as React from 'react'
import { INotifications } from '../../store/root-reducer'

interface Props {
    notifications: INotifications;
}

export default function NotificationsMolecule(props:Props ) {

const notifications = props && props.notifications && props.notifications.notifications;

if (!notifications || notifications.length === 0) {
    return <Box></Box>
}

return <UnorderedList p="0" m="0">
{notifications.map(notification => (      
<ListItem key={notification.id} bg={notification.read ? 'none' : 'lightGrey.500'} listStyleType="none">
    <Flex flexDirection={'column'} p="2" m="0" borderBottom="1px solid" borderBottomColor="gray.100">
    {!notification.read && <Badge colorScheme="purple">New</Badge>}
    <Text fontWeight={'medium'}>{notification.title}</Text>
        <Text>{notification.message}</Text>
    </Flex>
</ListItem>))}
</UnorderedList>
}
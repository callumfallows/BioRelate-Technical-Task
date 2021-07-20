import * as React from 'react';
import {
    Avatar,
    Badge,
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Popover,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    WrapItem
} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import gridIcon from '../../../assets/icons/icon-grid.svg';
import alertIcon from '../../../assets/icons/icon-alert.svg';
import avatar from '../../../assets/img/avatar.png';
import {useDispatch, useSelector} from "react-redux";
import {InitialState, INotifications} from "../../store/root-reducer";
import {RootDispatcher} from "../../store/root-redux";
import {useEffect} from "react";
import NotificationsMolecule from '../molecules/notification.molecule';

type Props = {}

interface StateProps {
    notifications: INotifications | undefined
}

const MainNavigation: React.FC<Props> = () => {

    const dispatch = useDispatch()
    const rootDispatcher = new RootDispatcher(dispatch);

    const logoutUser = async () => await rootDispatcher.logoutUser();
    const getNotifications = async () => {
        try {
            let notifications = await rootDispatcher.getNotifications();
            rootDispatcher.setNotifications(notifications);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getNotifications()
    }, [])
    const {notifications} = useSelector<InitialState, StateProps>(
        (state: InitialState) => {
            return {
                notifications: state.notifications
            }
        },
    )
    return (
        <nav id={"main-nav"}>
            <Flex m={4}>
                <Flex alignItems={"center"}>
                    <Popover>
                        <PopoverTrigger>
                            <IconButton
                                boxShadow={"0 2px 5px 0px #d4d4d4"}
                                bg={"white"}
                                w={12}
                                h={12}
                                marginRight={8}
                                borderRadius={24}
                                colorScheme="white"
                                aria-label="Search database"
                                icon={<img src={gridIcon} alt={'grid'}/>}
                            />
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverCloseButton color={"midnight.100"}/>
                            <PopoverHeader color={"midnight.100"}>Clicked</PopoverHeader>
                            <PopoverBody color={"midnight.100"}>Are you sure you want to have that
                                milkshake?</PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Box><Link textDecoration="none" fontWeight="700" color="midnight.100" to={"/"}>Logo</Link></Box>
                </Flex>
                <HStack spacing="24px" marginLeft={16} flexGrow={2}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/profile'}>Categories</Link>
                    <Link to={'/feed'}>Feed</Link>
                    <Link to={'/saved'}>Saved</Link>
                </HStack>
                <Flex alignItems={"center"}>
                    <Popover>
                        <PopoverTrigger>
                            <Box
                                marginRight={4} position={"relative"}>
                                <IconButton
                                    boxShadow={"0 2px 5px 0px #d4d4d4"}
                                    bg={"white"}
                                    w={12}
                                    h={12}
                                    borderRadius={24}
                                    aria-label="Search database"
                                    icon={<img src={alertIcon} alt={'grid'}/>}
                                />
                                {notifications && <Badge position="absolute" right="0" top="0" fontSize="0.8em" color="white"
                                       bg="blue.100">
                                    {notifications.count}
                                </Badge>}
                            </Box>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverCloseButton color={"midnight.100"}/>
                            <PopoverHeader color={"midnight.100"}>Notifications</PopoverHeader>
                            <PopoverBody p="0" m="0" height="60vh" overflowY="auto" color={"midnight.100"}>
                                <NotificationsMolecule notifications={notifications} />
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Flex>
                <HStack spacing="24px" justifySelf="flex-end">
                    <WrapItem>
                        <Avatar name="Cal Fal" src={avatar}/>
                    </WrapItem>
                    <Button onClick={() => logoutUser()} bg={"blue.100"}>Log Out</Button>
                </HStack>
            </Flex>
        </nav>
    )
}

export default MainNavigation;

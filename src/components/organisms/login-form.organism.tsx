import * as React from 'react'
import {useFormik} from 'formik'
import FormInputMolecule from '../molecules/form-input.molecule'
import {IUser} from '../../store/user/user'
import {Button} from '@chakra-ui/react'

type Props = {
    loginUser: (user: IUser | any, password: string) => void
}

const LoginFormOrganism: React.FC<Props> = ({loginUser}) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: async ({username, password}) => {
            await loginUser(username, password)
        },
    })

    return (
        <form style={{width: '100%'}} onSubmit={formik.handleSubmit}>
            <FormInputMolecule
                id={'username'}
                required={true}
                label={'Email'}
                placeholder={'ramona@example.com'}
                type={'username'}
                onChange={(e) => {
                    formik.handleChange(e)
                }}
                error={formik.errors.username}
            />
            <FormInputMolecule
                id={'password'}
                required={true}
                label={'Password'}
                type={'password'}
                onChange={(e) => {
                    formik.handleChange(e)
                }}
                error={formik.errors.password}
            />
            <Button w="100%" type="submit" size="lg" bg="primary.100">
                Login
            </Button>
        </form>
    )
}

export default LoginFormOrganism

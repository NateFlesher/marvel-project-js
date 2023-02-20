import React from "react";
import { useDispatch, useStore } from 'react-redux'
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseName, chooseComics, chooseDescription, chooseImgHead, chooseDateCreated } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input'
import { serverCalls } from '../../api'
import { useGetData } from "../../custom-hooks";


interface HeroFormProps {
    id?: string,
    data?: {}
}

export const HeroForm = (props: HeroFormProps) => {
    const dispatch = useDispatch()
    let { heroData, getData } = useGetData();
    const store = useStore()
    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data: any, event: any) => {
        console.log(props.id)

        if (props.id!) {
            await serverCalls.get()
            console.log(`Collected: ${data} ${props}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseDescription(data.description))
            dispatch(chooseComics(data.comics))
            dispatch(chooseImgHead(data.img_head))
            dispatch(chooseDateCreated(data.date_created))
            console.log(store.getState())
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Hero Name</label>
                    <Input {...register('name')} name="name" placeholder="Name" />
                </div>

                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )

}
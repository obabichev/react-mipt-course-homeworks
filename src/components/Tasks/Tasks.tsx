import React, {useMemo} from "react";
import {Task} from "../Task/Task";
import styled from "@emotion/styled";
import Loader from "../loader/Loader";
import {Notification} from "../notification/Notification";
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import {getBoard} from "../../service/board";
import {normalize} from "../../utils/normalize";

const MainDiv = styled.div`
        display: grid;
        text-align: center;
    `

export const Tasks = () => {

    const params = useParams<{ id: string }>();
    const id = params.id;

    const [board, loading, error] = useFetch(getBoard(id));

    const rootTasks = useMemo( () => board?.tasks.filter(task => !task.parent), [board])

    const normalizedTasks = useMemo( () => normalize(board?.tasks ?? [], "_id"), [board])

    return <MainDiv>
        {loading ? <Loader/> :
            board &&
            <div>
                <div style={{display: "grid", gridTemplateColumns: "0.1fr 0.9fr"}}>
                    {board.icon && <img style={{width: "32px"}} src={board.icon.value}/>}
                    <div style={{textAlign: "left"}}>{board .title}</div>
                </div>
                <div>
                    <div style={{display: "grid", textAlign: "left"}}>{board.category.value}</div>
                </div>
                {rootTasks?.map(task => (
                    <Task key={task.key}
                          taskId={task._id}
                          tasks={normalizedTasks}/>
                ))}
            </div>
        }
        <Notification error={error}/>
    </MainDiv>

}
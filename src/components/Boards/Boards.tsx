import React, {useState} from 'react';
import {Board} from "../Board/Board";
import styled from '@emotion/styled'
import {getBoards} from "../../service/board";
import Loader from "../loader/Loader";
import {Notification} from "../notification/Notification";
import {useQuery} from "react-query";

const MainDiv = styled.div`
      background: linear-gradient(45deg, #0099ff, #ff66ff 100vw, #0099ff);
      background-size: 400%;
      width: 100vw;
      height: 100vh;
      position: relative;
      animation: gradientMove 10s ease infinite;
      text-align: center;
      @keyframes gradientMove {
        0% {
          background-position: 0 0;
        }
        50% {
          background-position: 50% 50%;
        }
        100% {
          background-position: 0 0;
        }
      }
    `

const Header = styled.div`
      font-weight: bold;
      font-size: 1rem;
    `;

const MainHeader = styled.div`
      display: grid; 
      grid-template-columns: repeat(4, 1fr);
      padding: 0 24px 20px 29px
    `;
const BOARDS_LIMIT = 2;

export const Boards =  () => {

    const [page, setPage] = useState(0);

    const boardsQuery = useQuery('BOARDS',
        getBoards(BOARDS_LIMIT, page * BOARDS_LIMIT));

    return <MainDiv>
            <div>
                <MainHeader>
                    <Header>Name</Header>
                    <Header>Key</Header>
                    <Header>Owner</Header>
                    <Header>Category</Header>
                </MainHeader>
                {boardsQuery.isLoading ? <Loader/> : boardsQuery.data?.map((data, index) => <Board key={data.key} data={data}/>)}
            </div>
        <Notification error={boardsQuery.error as string}/>
    </MainDiv>
}

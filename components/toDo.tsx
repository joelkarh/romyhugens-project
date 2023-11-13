'use client'
import { useState } from 'react'
import { todo } from '../data'
import styles from './todo.module.scss'
import Image from 'next/image'
import ToDoComponent from './toDoComonent'
function ToDo() {
     const [active, setActive] = useState(0);
     // const [clicked, setClick] = useState(null);
     const { title, description, todoList } = todo;

     function buttonActive(buttonId: number) {
          setActive(buttonId);
     }

     return (
          <>
               <section className={styles.toDo}>
                    <div className="container">
                         <div className="row">
                              <div className="col-8 mx-auto">
                                   <h5>{title}</h5>
                                   <p>{description}</p>
                              </div>
                         </div>
                         <div className="row">
                              <div className="col">
                                   <div className={`${styles.todoItem}`}>
                                        {todoList?.map(({ todoTitle }, index) => (
                                             <button key={index} onClick={() => buttonActive(index)} type='button' className={active === index ? styles.active : ""}> {todoTitle}</button>
                                        ))}
                                   </div>
                              </div>
                         </div>
                         <section className={`row  ${styles.rowbg}`}>
                              {
                                   todoList.length > 0 && todoList.map(({ todoTitle, imgSrc, todoDescription, quote }, i) => (
                                        i === active && <ToDoComponent key={i} TodoTitle={todoTitle} ImgSrc={imgSrc} TodoDescription={todoDescription} Quote={quote} />
                                   ))
                              }

                         </section>
                    </div>
               </section>
          </>
     )
}

export default ToDo
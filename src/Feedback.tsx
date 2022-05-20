// slides number 90-100
import {useState } from "react"
export default function Feedback () {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [submitted, setSubmitted] = useState(false);
    return (
        <div>
        {submitted || <form onSubmit={(e) => { // if submitted is not true, show the form
            console.log("Hi");
            // do other stuff
            e.preventDefault();
            setSubmitted(true)
            }}>
            <label htmlFor="name">Enter your name</label>
            <input id="name" value={name} type="text" onChange={e => setName(e.target.value)}></input>
            <label htmlFor="comment">Leave a comment</label>
            <textarea id="comment" value={comment} onChange={e => setComment(e.target.value)}></textarea>
            <button type="submit">Submit</button>
        </form>}
            <div>
                {submitted && <div><p>Thank you, {name}. Your comment was submitted to our staff for review.</p>
                <p>Your comment: {comment}</p> 
                <button onClick = { () => {
                    setSubmitted(false)
                    setName("")
                    setComment("")
                }
                }>Leave another comment</button></div>}
            </div>
        </div>
    )
}
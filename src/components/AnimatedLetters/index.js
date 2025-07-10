import './index.scss'
const AnimatedLetters=({letterClass,strArr, idx})=>{
    return(
        <span>
            {
                strArr.map((char,i)=>{
                    return(
                        <span key={char+i} className={`${letterClass} _${i+idx}`}>
                            {char}
                        </span>
                    )
                })
            }

        </span>
    )
}
export default AnimatedLetters;
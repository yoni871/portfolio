import algorithms from './icons2/algorithm.png'
import Cpp from './icons2/C++.png'
import github from './icons2/github.png'
import java from './icons2/java.png'
import multithread from './icons2/program.png'
import python from './icons2/python.png'
import reactIcon from './icons2/react.png'
import htmlCss from './icons2/htmlCss.png'

const IconsList = [
    {icon: <img src={htmlCss} alt='htmlCss' style={{opacity: 0.5, height: 50 }} />, text: "HTML/CSS"},
    { icon: <img src={algorithms} alt="Algorithms" style={{ width: 50, height: 50 }} />, text: "DSA" },
    { icon: <img src={Cpp} alt="C++" style={{ width: 50, height: 50 }} />, text: "C++" },
    { icon: <img src={github} alt="GitHub" style={{ width: 50, height: 50 }} />, text: "GitHub" },
    { icon: <img src={java} alt="Java" style={{ width: 50, height: 50 }} />, text: "Java" },
    { icon: <img src={multithread} alt="Multithread" style={{ width: 50, height: 50 }} />, text: "Multithread" },
    { icon: <img src={python} alt="Python" style={{ width: 50, height: 50 }} />, text: "Python" },
    { icon: <img src={reactIcon} alt="React" style={{ width: 50, height: 50 }} />, text: "React" },
];

export default IconsList;
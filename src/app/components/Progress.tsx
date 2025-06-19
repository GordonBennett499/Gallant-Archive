interface ProgressProps {
    title: string,
    x: number,
    y: number
}

const Progress = ({title, x, y}: ProgressProps) => {
    return (
        <div className="my-3">
            <h3 className="font-bold mb-2">{title} {x}/{y}</h3>
            <div className="bg-slate-800 h-5 rounded-full overflow-hidden">
              <div className={`bg-violet-400 h-full`} style={{width: `calc((${x}/${y})*100%)`}}></div>
            </div>
        </div>
    );
}

export default Progress;
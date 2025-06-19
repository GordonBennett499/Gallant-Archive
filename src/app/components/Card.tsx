import Link from "next/link";
import { MoveRight } from "lucide-react";

const Card = ({title, url, ...props}) => {
    return (
        <div className="border rounded-md p-3">
            <h3 className="font-bold mb-2">
              <Link href={url} className="flex flex-row gap-3">{title} <MoveRight /></Link>
            </h3>
            {props.children}
        </div>
    );
}

export default Card;
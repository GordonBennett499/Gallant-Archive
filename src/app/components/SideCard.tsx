interface SideCardProps {
    data: {
        [key: string]: any;
    }
}

const SideCard = ({ data }: SideCardProps) => {
    return (
        <div className="flex flex-col border p-5 rounded-lg m-7  text-center ">
            <h1 className="text-2xl font-bold pb-2 border-b">{data.title}</h1>

            <div className="border-b pt-10 pb-2">
                <img
                    src={data.logo || 'https://placehold.jp/30/dd6699/ffffff/150x150.png?text=nologo'}
                    alt="projectlogo"
                    className="mx-auto block w-[100px] h-[100px]"
                />
                <p className="italic text-sm pt-5">Current known logo</p>
            </div>

            <div className="border-b pb-1">
                <div className="p-2 flex justify-between">
                    <h2 className="font-bold">Announced</h2>
                    <h2>{data.announcedDate || 'TBA'}</h2>
                </div>
                <div className="p-2 flex justify-between">
                    <h2 className="font-bold">Release</h2>
                    <h2>{data.releaseDate || 'TBA'}</h2>
                </div>
            </div>
            <div className="pt-1 pb-1 text-xl border-b font-bold">
                Links
                <div className="font-normal text-base">
                    {data.links.length > 0 ? (
                        data.links.map((link: any, index: number) => (
                            <div key={index}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                            </div>
                        ))
                    ) : (
                        <p>No links available.</p> // Optional fallback UI if no links
                    )}
                </div>
            </div>
        </div>
    );
};

export default SideCard;

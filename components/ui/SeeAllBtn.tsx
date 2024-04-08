import { BiSolidChevronRight } from "react-icons/bi";

export default function SeeAllBtn({ btnStyles, btnIconStyles }: any) {
    return (
        <button type="button" className={`text-[1rem] text-[#D49941] flex items-center ${btnStyles}`}>
            See All
            <div>
                <BiSolidChevronRight className={`text-[#D49941] w-[25px] h-[25px] object-cover ${btnIconStyles}`} />
            </div>
        </button>
    )
}
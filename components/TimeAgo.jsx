import useTimeAgo from '../hooks/useTimeAgo';
export default function TimeAgo({timestamp}){
    const timeAgo = useTimeAgo(new Date(timestamp))
    return <time dateTime="timeExample">{timeAgo}</time>
}
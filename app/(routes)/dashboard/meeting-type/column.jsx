import { Button } from '@/components/ui/button';
import { Clock, Copy, MapPin, Pen, Settings, Trash } from 'lucide-react';


export const columns = (onCopyClickHandler, onDeleteMeetingEvent, getEventList, BusinessInfo) => [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => <div>{row.original.eventName}</div>
    },
    {
        accessorKey: "duration",
        header: "Duration",
        cell: ({ row }) => <div className='flex gap-2'><Clock /> {row.original.duration}</div>
    },
    {
        accessorKey: "type",
        header: "Meeting Type",
        cell: ({ row }) => <div className='flex gap-2'> <MapPin /> {row.original.locationType}</div>
    },
    {
        accessorKey: "link",
        header: "Meeting Link",
        cell: ({ row }) => (
            <h2
                className='flex gap-2 text-sm text-primary items-center cursor-pointer'
                onClick={() => { onCopyClickHandler(row.original) }}
            >
                Copy link
            </h2>
        )
    },
    {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => (
            <div className="flex gap-2">
                <Button 
                className="text-white " 
                onClick={() => onDeleteMeetingEvent(row.original)}>Delete</Button>
                {/* <Button onClick={() => getEventList()}>Refresh</Button> */}
            </div>
        )
    },
];

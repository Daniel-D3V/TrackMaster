"use client";

import { useState } from "react"
import Loading from "../Loading";
import TrackingDisplayDetails from "./DisplayDetails";
import TrackingNotFound from "./NotFound";

type Props = {
    data: any
}

export default function Tracking({ data }: Props) {

    const [track, setTrack] = useState(data)

    return (
        <>
            {!track && (
                <TrackingNotFound />
            )}

            {track && (
                <TrackingDisplayDetails data={data} />
            )}
        </>
    )
}
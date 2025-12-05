export type TrackDetailsResource = {
    id: string,
    attributes: {
        title: string,
        lyrics: string | null,
    }
}

type GetTrackDetailsOutput = {
    data: TrackDetailsResource
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: {
            // 'api-key': '4050bd2a-342c-4f63-a12b-280e6bcc153d'
        }
    }).then(res => res.json())

    return promise
}

type TrackAttachment = {
    url: string
}

type TrackListItemAttributes = {
    title: string,
    attachments: Array<TrackAttachment>
}

export type TrackListItemResource = {
    id: string,
    attributes: TrackListItemAttributes
}

type GetTrackListOutput = {
    data: Array<TrackListItemResource>
}

export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            // 'api-key': '4050bd2a-342c-4f63-a12b-280e6bcc153d'
        }
    }).then(res => res.json())

    return promise
}
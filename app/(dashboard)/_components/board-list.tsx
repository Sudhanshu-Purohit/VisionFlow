"use client";

import EmptyBoard from "./empty-boards";
import EmptyFavorite from "./empty-favorite";
import EmptySearch from "./empty-search";

interface BoardList {
    orgId: string;
    query: {
        search?: string;
        favorites?: string;
    }
}

const BoardList = ({ orgId, query }: BoardList) => {
    const data = [];

    if(!data.length && query.search) {
        return (
            <EmptySearch />
        );
    }

    if(!data.length && query.favorites) {
        return (
            <EmptyFavorite />
        );
    }

    if(!data.length) {
        return (
            <EmptyBoard />
        );
    }

    return (
        <div>

        </div>
    )
}

export default BoardList;

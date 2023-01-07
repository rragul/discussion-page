// comments array with id, comment, author, and timestamp
export const getComments = async () => {
    return [
        {
            id: 1,
            comment: "This is a comment",
            author: "John Doe",
            authorId: 1,
            timestamp: "2023-1-1 12:00:00",
            img: "https://i.pravatar.cc/150?img=14",
            parentId: null,
            upvotes: 0,
        },
        {
            id: 2,
            comment: "This is another comment",
            author: "Will Smith",
            authorId: 2,
            timestamp: "2023-1-5 12:00:00",
            img: "https://i.pravatar.cc/150?img=15",
            parentId: null,
            upvotes: 0,
        },
        {
            id: 3,
            comment: "This is a reply",
            author: "Jane Doe",
            authorId: 3,
            timestamp: "2023-1-5 12:00:00",
            img: "https://i.pravatar.cc/150?img=16",
            parentId: 1,
            upvotes: 0,
        },
    ]
}


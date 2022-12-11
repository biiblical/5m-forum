var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Mahnoor",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Eron",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Alek",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Mahnoor",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Eron",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Alek",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
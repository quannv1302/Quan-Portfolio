const modules = import.meta.glob('./pdf/*.pdf', {
    eager: true,
    import: 'default',
});

export const pdfs = Object.fromEntries(
    Object.entries(modules).map(([path, src]) => {
        const name = path
            .split('/')
            .pop()
            .replace(/\.pdf$/, '');

        return [name, src];
    })
);

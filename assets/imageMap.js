const modules = import.meta.glob('./images/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
});

export const images = Object.fromEntries(
    Object.entries(modules).map(([path, src]) => {
        const name = path
            .split('/')
            .pop()
            .replace(/\.(png|jpe?g|webp)$/, '');

        return [name, src];
    })
);

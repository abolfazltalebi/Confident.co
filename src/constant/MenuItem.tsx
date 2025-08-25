interface MenuItem {
    id: number;
    name: string;
    src: string;
}

export const menuItem: MenuItem[] = [
    { id: 1, name: "home", src: "/" },
    { id: 2, name: "about us", src: "/about" },
    { id: 3, name: "services", src: "/services" },
    { id: 4, name: "pages", src: "/pages" },
    { id: 5, name: "blog", src: "/blog" },
    { id: 6, name: "contact", src: "/contact" },
];
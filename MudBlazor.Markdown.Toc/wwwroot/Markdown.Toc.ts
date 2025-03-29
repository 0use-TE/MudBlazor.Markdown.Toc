// 定义 TocNode 类
class TocNode {
    level: number;
    id: string | null;
    title: string | null;

    constructor(level: number, id: string | null, title: string | null) {
        this.level = level;
        this.id = id;
        this.title = title;
    }
}

// 获取 TOC 节点的函数
export let getTocNodes = (id: string | null | undefined): TocNode[] => {
    let markdownElement: HTMLElement | null;

    if (id === null || id === undefined) {
        const markdownName = "mud-markdown-body";
        const elements = document.getElementsByClassName(markdownName);
        markdownElement = elements.length > 0 ? (elements[0] as HTMLElement) : null;
    } else {
        markdownElement = document.getElementById(id);
    }

    if (!markdownElement) {
        return [];
    }

    const headings = markdownElement.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const tocNodes: TocNode[] = [];

    headings.forEach((heading) => {
        const level = parseInt(heading.tagName[1]);
        const id = heading.id || null;
        const title = heading.textContent || null;
        tocNodes.push(new TocNode(level, id, title));
    });

    return tocNodes;
};

// 滚动到目标元素的函数
export let scrollToTarget = (id: string | null, scrollBehavior: "auto" | "smooth" | "instant" = "smooth"): void => {
    if (id === null) return;

    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: scrollBehavior });
    }
};
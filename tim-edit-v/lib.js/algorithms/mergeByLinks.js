export default function* mergeByLinks(links, targetLen) {
    // podmínkou linků je, že se nesmí křížit
    let lastLink = -1; // pokud jsou na zacatku unlinked
    let unlinkedAcc = 0; // unlinked in target
    let link;

    for (let i = 0, len = links.length; i < len; i++) {
        link = links[i];
        if (link >= 0) {
            unlinkedAcc = link - lastLink - 1;
            if (unlinkedAcc > 0) {
                while (unlinkedAcc--) {
                    yield [-1, ++lastLink];
                }
            } 
            yield [i, link];
            lastLink = link;
        } else {
            yield [i, -1];
        }
    }

    unlinkedAcc = targetLen - lastLink - 1;
    if (unlinkedAcc > 0) {
        while (unlinkedAcc--) {
            yield [-1, ++lastLink];
        }
    }
}
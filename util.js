import { Feed } from 'feed';

export const graphCMSImageLoader = ({ src }) => src;

export const genFeed = ({ type }) => {
    const feed = new Feed({});
    switch (type) {
        case 'rss':
            return feed.rss2();
            break;
        case 'atom':
            return feed.atom1();
            break;
        case 'json':
            return feed.json1();
            break;
    
        default:
            return feed.rss2();
            break;
    }
};

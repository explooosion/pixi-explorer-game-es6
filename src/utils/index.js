import { width, height } from '../config';

/**
 * Collision Detection
 * @param {*} s source 
 * @param {*} t target
 */
export const onCollisionDetection = (s, t) => {

    let combinedHalfWidths, combinedHalfHeights, vx, vy;

    s.centerX = s.x + s.width / 2;
    s.centerY = s.y + s.height / 2;
    t.centerX = t.x + t.width / 2;
    t.centerY = t.y + t.height / 2;

    s.halfWidth = s.width / 2;
    s.halfHeight = s.height / 2;
    t.halfWidth = t.width / 2;
    t.halfHeight = t.height / 2;

    vx = s.centerX - t.centerX;
    vy = s.centerY - t.centerY;

    combinedHalfWidths = s.halfWidth + t.halfWidth;
    combinedHalfHeights = s.halfHeight + t.halfHeight;

    return Math.abs(vx) < combinedHalfWidths && Math.abs(vy) < combinedHalfHeights
        ? true : false;
};

export const onWorldCollision = (sprite) => {
    if (sprite.x < 34) {
        sprite.vx = 0;
        sprite.x = 34;
    }

    if (sprite.x > width - 56) {
        sprite.vx = 0;
        sprite.x = width - 56;
    }

    if (sprite.y < 17) {
        sprite.vy = 0;
        sprite.y = 17;
    }

    if (sprite.y > height - 64) {
        sprite.vy = 0;
        sprite.y = height - 64;
    }
};

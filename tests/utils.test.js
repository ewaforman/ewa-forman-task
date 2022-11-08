import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";

test('should properly output rectangle perimeter', () => {
    const output = getRectanglePerimeter(2, 3);
    expect(output).toBe(10);
});


test('should properly output rectangle area', () => {
    const output = getRectangleArea(2, 3);
    expect(output).toBe(6);
});

test ('should generate a valid text output', () => {
    const output = getRectangleInfo(2, 3);
    expect(output).toBe('The perimeter of a rectangle is 10 and the area is 6');
});

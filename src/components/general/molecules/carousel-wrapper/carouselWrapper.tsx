interface CarouselWrapperProps {
  condition: boolean;
  wrapper: any;
  children: any;
}
const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: CarouselWrapperProps) => (condition ? wrapper(children) : children);

export default ConditionalWrapper;

interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: any;
  children: any;
}
const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps) => (condition ? wrapper(children) : children);

export default ConditionalWrapper;

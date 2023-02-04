import { useState } from 'react';
import { codeSnippets } from '../../reactSyntaxHighlighter';

export const useTypesOfExportsHelper = () => {
  const [areSnippetsVisible, setAreSnippetsVisible] = useState<boolean>(false);
  const [isNextSnippetVisible, setIsNextSnippetVisible] = useState<boolean>(false);

  const handleSnippetsVisibilityOnClick = () => {
    setAreSnippetsVisible(!areSnippetsVisible);
    setIsNextSnippetVisible(false);
  };

  const handleNextSnippetOnClick = () => {
    setIsNextSnippetVisible(!isNextSnippetVisible);
  };

  return {
    areSnippetsVisible,
    handleSnippetsVisibilityOnClick,
    handleNextSnippetOnClick,
    isNextSnippetVisible,
    codeSnippets,
  };
};

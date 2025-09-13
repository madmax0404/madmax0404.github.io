(function () {
  const STORAGE_KEY = "theme";
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  } else {
    root.setAttribute("data-theme", "auto");
  }

  function currentMode() {
    const mode = root.getAttribute("data-theme");
    if (mode === "light" || mode === "dark") return mode;
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function label() {
    const mode = root.getAttribute("data-theme");
    btn.title = `Theme: ${mode === "auto" ? `auto→${currentMode()}` : mode}`;
  }
  label();

  // ✅ 핵심 수정: '지금 보이는 모드'를 기준으로 반전
  btn.addEventListener("click", (e) => {
    if (e.shiftKey) {
      // (선택) Shift+클릭 시 AUTO 모드로 복귀
      root.setAttribute("data-theme", "auto");
      localStorage.removeItem(STORAGE_KEY);
      label();
      return;
    }
    const effective = currentMode();               // light | dark (auto 고려)
    const next = effective === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);         // 즉시 반전
    localStorage.setItem(STORAGE_KEY, next);       // 사용자 선택 저장
    label();
  });

  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    // AUTO일 때만 시스템 변경 반영
    if (!localStorage.getItem(STORAGE_KEY)) {
      root.setAttribute("data-theme", "auto");
      label();
    }
  });
})();
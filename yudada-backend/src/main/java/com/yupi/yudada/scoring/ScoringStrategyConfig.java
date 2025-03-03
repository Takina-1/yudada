package com.yupi.yudada.scoring;

import org.springframework.stereotype.Component;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.TYPE)//指定可以应用的目标包括类方法参数等
@Retention(RetentionPolicy.RUNTIME)//注解保留在运行时，可以在运行时通过反射获取
@Component
public @interface ScoringStrategyConfig {

    /**
     * 应用类型
     * @return
     */
    int appType();

    /**
     * 评分策略
     * @return
     */
    int scoringStrategy();
}